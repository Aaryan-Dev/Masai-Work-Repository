import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing Application", () => {
    global.score=1;
    console.log("Resetting score to 1");
    describe("App component should render", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<App />);
        });
        it("Should have the input Boxes",async()=>{
            expect(screen.getByTestId("input-name")).toBeInTheDocument();
            expect(screen.getByTestId("input-height")).toBeInTheDocument();
            expect(screen.getByTestId("input-weight")).toBeInTheDocument();
            expect(screen.getByTestId("input-power")).toBeInTheDocument();
            global.score+=1;
        });
        it("should have disabled add button when input fields are empty",async()=>{
            let addButton = screen.getByTestId("add-button");
            expect(addButton).toBeDisabled();
            global.score+=1;
        });
        it("should add the superhero details",async()=>{
            let nameInput = screen.getByTestId("input-name");
            let heightInput = screen.getByTestId("input-height");
            let weightInput = screen.getByTestId("input-weight");
            let powerInput = screen.getByTestId("input-power");
            let addButton = screen.getByTestId("add-button");
            fireEvent.change(nameInput,{target:{value:"Superman"}});
            fireEvent.change(heightInput,{target:{value:210}});
            fireEvent.change(weightInput,{target:{value:110}});
            fireEvent.change(powerInput,{target:{value:9}});
            expect(addButton).not.toBeDisabled();
            fireEvent.click(addButton);
            expect(screen.getByTestId("superhero-list")).toHaveTextContent("Superman");
            expect(screen.getByTestId("superhero-list")).toHaveTextContent("210");
            expect(screen.getByTestId("superhero-list")).toHaveTextContent("110");
            expect(screen.getByTestId("superhero-list")).toHaveTextContent("9");
            global.score+=2;
        });
        it("should show the most powerful superhero",async()=>{
            let nameInput = screen.getByTestId("input-name");
            let heightInput = screen.getByTestId("input-height");
            let weightInput = screen.getByTestId("input-weight");
            let powerInput = screen.getByTestId("input-power");
            let addButton = screen.getByTestId("add-button");
            fireEvent.change(nameInput,{target:{value:"Deadpool"}});
            fireEvent.change(heightInput,{target:{value:190}});
            fireEvent.change(weightInput,{target:{value:70}});
            fireEvent.change(powerInput,{target:{value:7}});
            fireEvent.click(addButton);
            fireEvent.change(nameInput,{target:{value:"Batman"}});
            fireEvent.change(heightInput,{target:{value:195}});
            fireEvent.change(weightInput,{target:{value:95}});
            fireEvent.change(powerInput,{target:{value:8}});
            fireEvent.click(addButton);
            fireEvent.change(nameInput,{target:{value:"Flash"}});
            fireEvent.change(heightInput,{target:{value:180}});
            fireEvent.change(weightInput,{target:{value:75}});
            fireEvent.change(powerInput,{target:{value:7}});
            fireEvent.click(addButton);
            fireEvent.click(screen.getByTestId("most-powerfull"));
            expect(screen.getByTestId("superhero-list")).toHaveTextContent("Batman");
            global.score+=3;
        });
        it("should show all the superhero details",async()=>{
            let nameInput = screen.getByTestId("input-name");
            let heightInput = screen.getByTestId("input-height");
            let weightInput = screen.getByTestId("input-weight");
            let powerInput = screen.getByTestId("input-power");
            let addButton = screen.getByTestId("add-button");
            fireEvent.change(nameInput,{target:{value:"Deadpool"}});
            fireEvent.change(heightInput,{target:{value:190}});
            fireEvent.change(weightInput,{target:{value:70}});
            fireEvent.change(powerInput,{target:{value:7}});
            fireEvent.click(addButton);
            fireEvent.change(nameInput,{target:{value:"Batman"}});
            fireEvent.change(heightInput,{target:{value:195}});
            fireEvent.change(weightInput,{target:{value:95}});
            fireEvent.change(powerInput,{target:{value:8}});
            fireEvent.click(addButton);
            fireEvent.change(nameInput,{target:{value:"Flash"}});
            fireEvent.change(heightInput,{target:{value:180}});
            fireEvent.change(weightInput,{target:{value:75}});
            fireEvent.change(powerInput,{target:{value:7}});
            fireEvent.click(addButton);
            fireEvent.click(screen.getByTestId("most-powerfull"));
            expect(screen.getByTestId("superhero-list")).toHaveTextContent("Batman");
            fireEvent.click(screen.getByTestId("all-superheroes"));
            let data=screen.getAllByTestId("superhero-list");
            expect(data[0]).toHaveTextContent("Deadpool");
            expect(data[1]).toHaveTextContent("Batman");
            expect(data[2]).toHaveTextContent("Flash");
            global.score+=2;
        });
    }); 
    afterAll(() => {
        console.log("Final Score is", global.score);
    });
});
