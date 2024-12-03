

interface IHeaderProps {

  lable?: string;
  children?: JSX.Element | JSX.Element[];

}

const Header = ({lable = "Default Props", children}: IHeaderProps) => {
  return (
    <>
      <h1>{lable}</h1>
      {children}
    </>
  )
}

export default Header