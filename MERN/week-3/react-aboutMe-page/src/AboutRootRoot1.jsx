import React from "react";
import styled from "styled-components";

export const AboutRootRoot1 = () => {
  console.log(window.matchMedia("(max-width: 480px)"));

  let x = window.matchMedia("(max-width: 375px)");

  function myFunction(x) {
    if (x.matches) {
      window.location.href = "https://abcde-aryan.netlify.app/";
      // document.body.style.backgroundColor = "yellow";
    } else {
    }
  }

  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes

  const FlexColumnFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const FlexColumn26Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <AboutRootRootRoot>
      <PurpleHeartFlexRow>
        <Text1>LOGO</Text1>
        <FlexRow>
          <AboutPortfolioBlog>
            About
            {"          "}
            Portfolio
            {"          "}
            Blog
            {"          "}
            Contact
          </AboutPortfolioBlog>
          <FlexColumn onClick={(e) => FlexColumnFunction(e, "FlexColumn")}>
            <Button1>Sign up</Button1>
          </FlexColumn>
        </FlexRow>
      </PurpleHeartFlexRow>
      <FlexColumn1>
        <PurpleHeartFlexColumn>
          <Text2>About</Text2>
          <VivendoOffenditPer>Vivendo offendit persecuti</VivendoOffenditPer>
        </PurpleHeartFlexColumn>
        <FlexColumn2>
          <Text3>homero</Text3>
          <DebetMolestiaeCons>
            Debet molestiae <br />
            constituto{" "}
          </DebetMolestiaeCons>
          <QuoExOcurreretQua>
            Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no
            ubique persecuti, at sit iusto aliquam interpretaris.
          </QuoExOcurreretQua>
          <FlexRow1>
            <Text4>295+</Text4>
            <Text4>1500+</Text4>
          </FlexRow1>
          <FlexRow2>
            <PartemVocent>Partem vocent </PartemVocent>
            <Text6>Natum volutpat</Text6>
          </FlexRow2>
          <FlexRow3>
            <EiNominaviSuavitat>
              Ei nominavi suavitate deterruisset qui, assum ubique quodsi.
            </EiNominaviSuavitat>
            <EiNominaviSuavitat>
              Id qui purto dicit, bonorum minimum et sit.
            </EiNominaviSuavitat>
          </FlexRow3>
        </FlexColumn2>
        <Clipdone src={`https://file.rendit.io/n/zudVhnnLjmret9wsIyrH.png`} />
      </FlexColumn1>
      <WhiteFlexColumn>
        <BlackRectangle />
        <Text7>Vivendo omnesque</Text7>
        <EuMinimMovetQuods>
          Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea
          nam, at posse dicta est.
        </EuMinimMovetQuods>
        <FlexRow4>
          <WhiteFlexColumn1>
            <CombinedShape
              src={`https://file.rendit.io/n/ttxLfxqXKTQfZ2uBaFKx.svg`}
            />
            <FlexColumn3>
              <Text8>Quidam officiis</Text8>
              <ProAdUbiqueErrori>
                Pro ad ubique erroribus, in modo mutat sed. Suscipit, natum
                animal qui et.
              </ProAdUbiqueErrori>
              <BlackRectangle1 />
              <FlexRow5>
                <Text6>Learn more</Text6>
                <Arrow
                  src={`https://file.rendit.io/n/5IRtWEnF1PvE1n0W0qKQ.svg`}
                />
              </FlexRow5>
            </FlexColumn3>
          </WhiteFlexColumn1>
          <WhiteFlexColumn2>
            <CombinedShape1
              src={`https://file.rendit.io/n/n6ZKr0aSpuUqZPOd0CbP.svg`}
            />
            <FlexColumn3>
              <Text8>Mazim nemore</Text8>
              <ProAdUbiqueErrori>
                An mel everti invenire intellegam, legendos consequuntur eu sit.{" "}
              </ProAdUbiqueErrori>
              <BlackRectangle1 />
              <FlexRow5>
                <Text6>Learn more</Text6>
                <Arrow
                  src={`https://file.rendit.io/n/5IRtWEnF1PvE1n0W0qKQ.svg`}
                />
              </FlexRow5>
            </FlexColumn3>
          </WhiteFlexColumn2>
          <WhiteFlexColumn3>
            <CombinedShape2
              src={`https://file.rendit.io/n/Q9w3rZVSEqPnljCxI45T.svg`}
            />
            <Text8>Idque maiestatis</Text8>
            <ProAdUbiqueErrori>
              Diam facilisi insolens per cu, eos malorum voluptaria ei.
            </ProAdUbiqueErrori>
            <BlackRectangle1 />
            <FlexRow5>
              <Text6>Learn more</Text6>
              <Arrow
                src={`https://file.rendit.io/n/5IRtWEnF1PvE1n0W0qKQ.svg`}
              />
            </FlexRow5>
          </WhiteFlexColumn3>
        </FlexRow4>
      </WhiteFlexColumn>
      <FlexColumn5>
        <BlackRectangle4 />
        <FlexColumn6>
          <Clipwelcome>
            <Text14>inciderint</Text14>
            <FlexColumn7>
              <Fill src={`https://file.rendit.io/n/6MXerchdUNd8bQ9fBFbq.svg`} />
              <CombinedShape3
                src={`https://file.rendit.io/n/4Kcf5dcymesv6Q3UCa3X.svg`}
              />
              <CombinedShape4
                src={`https://file.rendit.io/n/0gqLoCvk1rezeQ51W91p.svg`}
              />
            </FlexColumn7>
          </Clipwelcome>
          <Text15>Lorem deterruisset</Text15>
          <MeiMazimIudicoTri>
            Mei mazim iudico tritani te, qui feugait electram an. An mel corpora
            consectetuer. Duo veri eripuit honestatis ei.
          </MeiMazimIudicoTri>
          <MandamusExpetendaH>Mandamus expetenda has ex</MandamusExpetendaH>
          <MandamusExpetendaH>Eu minim movet quodsi eum</MandamusExpetendaH>
          <Text16>Usu vitae decore ut</Text16>
          <FlexRow8>
            <FlexColumn onClick={(e) => FlexColumnFunction(e, "FlexColumn8")}>
              <Button2>Explore</Button2>
            </FlexColumn>
            <FlexColumn onClick={(e) => FlexColumnFunction(e, "FlexColumn9")}>
              <Button3>Learn more</Button3>
            </FlexColumn>
          </FlexRow8>
        </FlexColumn6>
      </FlexColumn5>
      <PurpleHeartFlexColumn1>
        <Text17>Similique sea</Text17>
        <MazimNemoreSinguli>
          Mazim nemore singulis an ius, nullam ornatus nam ei. Idque maiestatis
          vis ut. An mel everti invenire intellegam.
        </MazimNemoreSinguli>
        <FlexRow9>
          <Text18>50+</Text18>
          <Text19>73%</Text19>
          <Text20>0.03</Text20>
          <Text2>$9</Text2>
        </FlexRow9>
        <FlexRow10>
          {[
            {
              childText: `Diam facilisi insolens per`,
            },
            {
              childText: `Esse concludaturque usu`,
            },
            {
              childText: `Quo ex ocurreret quaerendum`,
            },
            {
              childText: `Mei no ubique persecuti`,
            },
          ].map((data) => (
            <DiamFacilisiInsole1>{data.childText}</DiamFacilisiInsole1>
          ))}
        </FlexRow10>
      </PurpleHeartFlexColumn1>
      <FlexRow11>
        <FlexColumn10>
          <Text22>audiam</Text22>
          <Text23>Vim illum</Text23>
          <UnumPorroAudiamAt>
            Unum porro audiam at vel, eu nam primis regione. Vix ad everti
            diceret, ei omnium regione admodum sit.
            <br />
            <br />
            Mea an decore veritus probatus. Nec ea affert verterem. Vix probo
            semper et, mea simul graeco.
          </UnumPorroAudiamAt>
          <FlexColumn onClick={(e) => FlexColumnFunction(e, "FlexColumn11")}>
            <Button4>Explore</Button4>
          </FlexColumn>
        </FlexColumn10>
        <FlexColumn12>
          <FlexRow12>
            <CombinedShape5
              src={`https://file.rendit.io/n/nDsBKVjsRrcT7yblt6yI.svg`}
            />
            <FlexColumn13>
              <Text24>Dicat eripuit</Text24>
              <MolestiaeNeEsseV>
                Molestiae ne, esse vulputate definitiones ut est fastidii{" "}
              </MolestiaeNeEsseV>
            </FlexColumn13>
            <CombinedShape6
              src={`https://file.rendit.io/n/kLwGZAmTyQp7ZAllqefC.svg`}
            />
            <FlexColumn14>
              <NemoreFacilisi>Nemore facilisi </NemoreFacilisi>
              <MolestiaeNeEsseV>
                Erroribus vituperatoribus no eos, no nobis alienum per dolor{" "}
              </MolestiaeNeEsseV>
            </FlexColumn14>
          </FlexRow12>
          <FlexRow13>
            <CombinedShape7
              src={`https://file.rendit.io/n/40u9FzoniIWEhpX27Bnb.svg`}
            />
            <FlexColumn15>
              <Text24>Ferri aperiri</Text24>
              <NecWisiAssumNovum>
                Nec wisi assum novum eu. At sea dolorum constituto, ad solet{" "}
              </NecWisiAssumNovum>
            </FlexColumn15>
            <Chat src={`https://file.rendit.io/n/B7gNYQI6O3JT7tLHShUw.svg`} />
            <FlexColumn14>
              <Text24>Essent ornatus</Text24>
              <NecWisiAssumNovum>
                Exerci dissentiet comprehensam eum ne quo in tacimates
              </NecWisiAssumNovum>
            </FlexColumn14>
          </FlexRow13>
          <FlexRow14>
            <CombinedShape8
              src={`https://file.rendit.io/n/aAPy1Wv16CNthOKsrNDq.svg`}
            />
            <FlexColumn17>
              <Text24>Qui no stet</Text24>
              <NecWisiAssumNovum>
                Ei mei fabellas gubergren, ius nostro senserit adversarium
              </NecWisiAssumNovum>
            </FlexColumn17>
            <Fill1 src={`https://file.rendit.io/n/UwttTSCkQxUrUvJ1XNAz.svg`} />
            <FlexColumn14>
              <Text24>Qualisque</Text24>
              <NecWisiAssumNovum>
                Vix dicam dolore cu mel erat timeam scriptorem an
              </NecWisiAssumNovum>
            </FlexColumn14>
          </FlexRow14>
        </FlexColumn12>
      </FlexRow11>
      <FlexColumn1>
        <FlexColumn20>
          <BlackRectangle4 />
          <FlexRow15>
            <TimberwolfFlexColumn>
              <Bitmap
                src={`https://file.rendit.io/n/6ZloVaH2ug605YeVKMRI.png`}
              />
            </TimberwolfFlexColumn>
            <FlexColumn21>
              <Text22>tantas</Text22>
              <Text23>
                An mel nostrum <br />
                appareat
              </Text23>
              <VixHabeoScaevolaP>
                Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea
                in dicant eligendi evertitur. Ad falli aliquid menandri his.
              </VixHabeoScaevolaP>
              <FlexColumn
                onClick={(e) => FlexColumnFunction(e, "FlexColumn22")}
              >
                <Button5>Read more</Button5>
              </FlexColumn>
            </FlexColumn21>
          </FlexRow15>
        </FlexColumn20>
        <FlexColumn23>
          <BlackRectangle4 />
          <FlexColumn24>
            <Text3>noluisse</Text3>
            <UsuVocentCopiosae>
              Usu vocent <br />
              copiosae nihil
            </UsuVocentCopiosae>
            <FlexRow16>
              <Text31>Epicuri</Text31>
              <Text32>85%</Text32>
            </FlexRow16>
            <WhiteFlexColumn4>
              <SunglowRectangle />
            </WhiteFlexColumn4>
            <FlexRow16>
              <Text31>Detracto</Text31>
              <Text32>73%</Text32>
            </FlexRow16>
            <WhiteFlexColumn5>
              <SunsetOrangeRectangle />
            </WhiteFlexColumn5>
            <FlexRow16>
              <Text31>Fierent</Text31>
              <Text32>42%</Text32>
            </FlexRow16>
            <WhiteFlexColumn6>
              <NavyBlueRectangle />
            </WhiteFlexColumn6>
          </FlexColumn24>
        </FlexColumn23>
        <Clipuploading
          src={`https://file.rendit.io/n/IPO3I2gNaJZGT8M02PXQ.png`}
        />
      </FlexColumn1>
      <GoldenrodFlexRow>
        <FlexColumn25>
          <Text14>pericula</Text14>
          <MeaModusVolumusAb>
            Mea modus volumus <br />
            abhorreant
          </MeaModusVolumusAb>
        </FlexColumn25>
        <FlexRow19>
          <DarkFieldDefault>
            <Label> </Label>
            <Placeholder>Email</Placeholder>
          </DarkFieldDefault>
          <FlexColumn26
            onClick={(e) => FlexColumn26Function(e, "FlexColumn26")}
          >
            <Button6>Subscribe</Button6>
          </FlexColumn26>
        </FlexRow19>
      </GoldenrodFlexRow>
      <FlexColumn27>
        <FlexRow20>
          <FlexColumn28>
            <Text38>LOGO</Text38>
            <ProEuApeirianSuav>
              Pro eu apeirian suavitate dissentiet, qui dicunt ancillae id, ne
              mea homero persequeris.
            </ProEuApeirianSuav>
            <FlexRow21>
              <Path src={`https://file.rendit.io/n/1ctd8QYNaC5XL7kDCwTm.svg`} />
              <Path1
                src={`https://file.rendit.io/n/u0EDjYRzn78ZNoDebbsl.svg`}
              />
              <Shape
                src={`https://file.rendit.io/n/cza5pCRRgx8GXbeLEAGZ.svg`}
              />
            </FlexRow21>
          </FlexColumn28>
          <FlexColumn29>
            <Text6>Causae</Text6>
            <FlexColumn30>
              <Text40>Doming</Text40>
              <Text41>Dicunt</Text41>
              <Text41>Feugait</Text41>
              <Text41>Scripta</Text41>
            </FlexColumn30>
          </FlexColumn29>
          <FlexColumn31>
            <Text6>Aperiri</Text6>
            <FlexColumn32>
              <Text40>Postulant</Text40>
              <Text41>Affert</Text41>
              <Text41>Audire</Text41>
              <Text41>Quaestio</Text41>
            </FlexColumn32>
          </FlexColumn31>
          <FlexColumn33>
            <TimberwolfFlexColumn>
              <Bitmap1
                src={`https://file.rendit.io/n/7KNGjOTOHAk7KeanuVm6.png`}
              />
            </TimberwolfFlexColumn>
            <TimberwolfFlexColumn>
              <Bitmap1
                src={`https://file.rendit.io/n/o4mlH1bJ2kQsXYviRoyL.png`}
              />
            </TimberwolfFlexColumn>
          </FlexColumn33>
          <FlexColumn34>
            <FlexColumn35>
              <IusDelectusInstruc>
                Ius delectus instructior eu, eu eum mentitum percipit forensibus
              </IusDelectusInstruc>
              <Text49>July 15, 2019</Text49>
            </FlexColumn35>
            <FlexColumn35>
              <IusDelectusInstruc>
                Altera integre suavitate per an, alienum phaedrum te sea
              </IusDelectusInstruc>
              <Text49>July 10, 2019</Text49>
            </FlexColumn35>
          </FlexColumn34>
        </FlexRow20>
        <FlexColumn37>
          <BlackRectangle4 />
          <FlexRow15>
            <Text41>Created by Laaqiq</Text41>
            <LOGOAllRi>© LOGO, 2019. All rights reserved.</LOGOAllRi>
          </FlexRow15>
        </FlexColumn37>
      </FlexColumn27>
    </AboutRootRootRoot>
  );
};

const FlexColumn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  } ;
`;
const FlexColumn1 = styled.div`
  width: 1440px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 72px;
  font-family: DM Serif Display;
  line-height: 80px;
  text-align: center;
  white-space: nowrap;
`;
const Text3 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 21px 0px;
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;
const Text4 = styled.div`
  font-size: 40px;
  font-family: DM Serif Display;
  line-height: 48px;
  white-space: nowrap;
`;
const Text6 = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const EiNominaviSuavitat = styled.div`
  width: 270px;
  height: 49px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
`;
const FlexColumn3 = styled.div`
  width: 340px;
  height: 163px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: flex-start;
`;
const Text8 = styled.div`
  margin: 0px 0px 15px 0px;
  font-size: 24px;
  font-family: DM Serif Display;
  line-height: 32px;
  white-space: nowrap;
`;
const ProAdUbiqueErrori = styled.div`
  width: 306px;
  height: 48px;
  margin: 0px 0px 25px 2px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
`;
const BlackRectangle1 = styled.div`
  width: 338px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 18px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const FlexRow5 = styled.div`
  width: 336px;
  gap: 7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  padding: 0px 2px;
`;
const Arrow = styled.img`
  width: 6px;
  height: 11px;
  align-self: flex-end;
  margin: 0px 0px 6px 0px;
`;
const BlackRectangle4 = styled.div`
  width: 1440px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Text14 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;
const MandamusExpetendaH = styled.div`
  position: relative;
  margin: 0px 0px 24px 64px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const DiamFacilisiInsole1 = styled.div`
  width: 270px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
`;
const Text22 = styled.div`
  margin: 0px 0px 21px 0px;
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;
const Text23 = styled.div`
  margin: 0px 0px 29px 0px;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  white-space: nowrap;
`;
const Text24 = styled.div`
  font-size: 24px;
  font-family: DM Serif Display;
  line-height: 32px;
  white-space: nowrap;
`;
const MolestiaeNeEsseV = styled.div`
  width: 270px;
  height: 77px;
  align-self: stretch;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: pre-wrap;
`;
const FlexColumn14 = styled.div`
  width: 270px;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NecWisiAssumNovum = styled.div`
  width: 270px;
  height: 80px;
  align-self: stretch;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: pre-wrap;
`;
const FlexRow15 = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 135px;
`;
const TimberwolfFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background-color: #d7d7d7;
`;
const FlexRow16 = styled.div`
  width: 470px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 7px 0px;
`;
const Text31 = styled.div`
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
  white-space: nowrap;
`;
const Text32 = styled.div`
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: right;
  white-space: nowrap;
`;
const Text40 = styled.div`
  align-self: stretch;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const Text41 = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const Bitmap1 = styled.img`
  width: 70px;
  height: 48px;
`;
const FlexColumn35 = styled.div`
  width: 270px;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const IusDelectusInstruc = styled.div`
  width: 270px;
  align-self: stretch;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
`;
const Text49 = styled.div`
  font-size: 12px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const AboutRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  overflow: hidden;
`;
const PurpleHeartFlexRow = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 135px;
  background-color: #434ccc;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-family: DM Serif Display;
  line-height: 48px;
  white-space: nowrap;
`;
const FlexRow = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const AboutPortfolioBlog = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: right;
  white-space: pre-wrap;
`;
const Button1 = styled.div`
  width: 57px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px 55.5px 10px 55.5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
`;
const PurpleHeartFlexColumn = styled.div`
  width: 247px;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 47px 596px 55px 597px;
  background-color: #434ccc;
`;
const VivendoOffenditPer = styled.div`
  align-self: stretch;
  color: #ffffff;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  height: 514px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 127px 735px 127px 135px;
  background-color: rgba(67.3, 76.8, 204, 0.05);
`;
const DebetMolestiaeCons = styled.div`
  align-self: flex-start;
  margin: 0px 0px 29px 0px;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  white-space: pre-wrap;
`;
const QuoExOcurreretQua = styled.div`
  width: 570px;
  height: 83px;
  margin: 0px 0px 30px 0px;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
`;
const FlexRow1 = styled.div`
  width: 398px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 5px 0px;
  padding: 0px 172px 0px 0px;
`;
const FlexRow2 = styled.div`
  width: 421px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 8px 0px;
  padding: 0px 149px 0px 0px;
`;
const PartemVocent = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  white-space: pre-wrap;
`;
const FlexRow3 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Clipdone = styled.img`
  width: 958px;
  height: 718px;
  left: 482px;
  top: 221px;
  position: absolute;
`;
const WhiteFlexColumn = styled.div`
  height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f6fd;
`;
const BlackRectangle = styled.div`
  width: 1440px;
  height: 1px;
  margin: 0px 0px 59px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Text7 = styled.div`
  align-self: flex-end;
  margin: 0px 485px 29px 0px;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  text-align: center;
  white-space: nowrap;
`;
const EuMinimMovetQuods = styled.div`
  width: 570px;
  height: 83px;
  align-self: center;
  margin: 0px 0px 36px 0px;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
  text-align: center;
`;
const FlexRow4 = styled.div`
  width: 1440px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const WhiteFlexColumn1 = styled.div`
  width: 340px;
  height: 374px;
  gap: 54px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 21px 0px 21px 30px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
`;
const CombinedShape = styled.img`
  width: 132px;
  height: 114px;
  margin: 0px 0px 0px 89px;
`;
const WhiteFlexColumn2 = styled.div`
  width: 340px;
  height: 374px;
  gap: 63px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 21px 0px 21px 30px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
`;
const CombinedShape1 = styled.img`
  width: 186px;
  height: 96px;
  margin: 0px 0px 0px 54px;
`;
const WhiteFlexColumn3 = styled.div`
  width: 340px;
  height: 374px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 21px 0px 21px 30px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
`;
const CombinedShape2 = styled.img`
  width: 144px;
  height: 126px;
  margin: 0px 0px 48px 91px;
`;
const FlexColumn5 = styled.div`
  height: 768px;
  gap: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(67.3, 76.8, 204, 0.05);
`;
const FlexColumn6 = styled.div`
  width: 570px;
  height: 473px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 90px 135px 90px 735px;
`;
const Clipwelcome = styled.div`
  height: 368px;
  left: 0px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 98px 18px 187px 735px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/sCmNAioBuytc2B6rCCHP.png");
`;
const FlexColumn7 = styled.div`
  width: 47px;
  height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 80px 0px 0px;
`;
const Fill = styled.img`
  width: 41px;
  height: 39px;
  margin: 0px 0px 7px 0px;
`;
const CombinedShape3 = styled.img`
  width: 44px;
  height: 42px;
  align-self: flex-end;
  margin: 0px 0px 10px 0px;
`;
const CombinedShape4 = styled.img`
  width: 35px;
  height: 40px;
  margin: 0px 0px 0px 4px;
`;
const Text15 = styled.div`
  position: relative;
  margin: 0px 0px 29px 0px;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  white-space: nowrap;
`;
const MeiMazimIudicoTri = styled.div`
  width: 570px;
  height: 69px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 33px 0px;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
`;
const Text16 = styled.div`
  position: relative;
  margin: 0px 0px 57px 64px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const FlexRow8 = styled.div`
  width: 570px;
  position: relative;
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const Button2 = styled.div`
  width: 59px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13px 55.5px 11px 55.5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #434ccc;
`;
const Button3 = styled.div`
  width: 88px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px 40.5px 10px 39.5px;
  color: #434ccc;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #434ccc;
  background-color: rgba(0, 0, 0, 0.32);
`;
const PurpleHeartFlexColumn1 = styled.div`
  height: 315px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 76px 135px 89px 135px;
  background-color: #434ccc;
`;
const Text17 = styled.div`
  align-self: flex-end;
  margin: 0px 421px 29px 0px;
  color: #ffffff;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  text-align: center;
  white-space: nowrap;
`;
const MazimNemoreSinguli = styled.div`
  width: 770px;
  height: 83px;
  align-self: center;
  margin: 0px 0px 35px 0px;
  color: #ffffff;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
  text-align: center;
`;
const FlexRow9 = styled.div`
  width: 995px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 97px 0px 78px;
`;
const Text18 = styled.div`
  margin: 0px 174px 0px 0px;
  color: #ffffff;
  font-size: 72px;
  font-family: DM Serif Display;
  line-height: 80px;
  text-align: center;
  white-space: nowrap;
`;
const Text19 = styled.div`
  margin: 0px 165px 0px 0px;
  color: #ffffff;
  font-size: 72px;
  font-family: DM Serif Display;
  line-height: 80px;
  text-align: center;
  white-space: nowrap;
`;
const Text20 = styled.div`
  margin: 0px 195px 0px 0px;
  color: #ffffff;
  font-size: 72px;
  font-family: DM Serif Display;
  line-height: 80px;
  text-align: center;
  white-space: nowrap;
`;
const FlexRow10 = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FlexRow11 = styled.div`
  width: 1440px;
  gap: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 111px 0px 129px 0px;
  background-color: rgba(67.3, 76.8, 204, 0.05);
`;
const FlexColumn10 = styled.div`
  width: 338px;
  height: 528px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const UnumPorroAudiamAt = styled.div`
  width: 338px;
  height: 230px;
  align-self: stretch;
  margin: 0px 0px 33px 0px;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
`;
const Button4 = styled.div`
  width: 59px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px 54.5px 10px 54.5px;
  color: #434ccc;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #434ccc;
  background-color: rgba(0, 0, 0, 0.32);
`;
const FlexColumn12 = styled.div`
  height: 528px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const FlexRow12 = styled.div`
  width: 752px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 60px 0px;
`;
const CombinedShape5 = styled.img`
  width: 52px;
  height: 45px;
  align-self: flex-start;
  margin: 8px 30px 0px 0px;
`;
const FlexColumn13 = styled.div`
  width: 270px;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 40px 0px 0px;
`;
const CombinedShape6 = styled.img`
  width: 60px;
  height: 46px;
  align-self: flex-start;
  margin: 8px 30px 0px 0px;
`;
const NemoreFacilisi = styled.div`
  font-size: 24px;
  font-family: DM Serif Display;
  line-height: 32px;
  white-space: pre-wrap;
`;
const FlexRow13 = styled.div`
  width: 752px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 0px 57px 0px;
`;
const CombinedShape7 = styled.img`
  width: 49px;
  height: 48px;
  align-self: flex-start;
  margin: 8px 30px 0px 0px;
`;
const FlexColumn15 = styled.div`
  width: 270px;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 46px 0px 0px;
`;
const Chat = styled.img`
  width: 54px;
  height: 52px;
  align-self: flex-start;
  margin: 8px 30px 0px 0px;
`;
const FlexRow14 = styled.div`
  width: 752px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const CombinedShape8 = styled.img`
  width: 49px;
  height: 49px;
  align-self: flex-start;
  margin: 8px 30px 0px 0px;
`;
const FlexColumn17 = styled.div`
  width: 270px;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 50px 0px 0px;
`;
const Fill1 = styled.img`
  width: 50px;
  height: 47px;
  align-self: flex-start;
  margin: 8px 30px 0px 0px;
`;
const FlexColumn20 = styled.div`
  height: 624px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 144px 0px;
  background-color: rgba(67.3, 76.8, 204, 0.05);
`;
const Bitmap = styled.img`
  width: 570px;
  height: 480px;
`;
const FlexColumn21 = styled.div`
  width: 470px;
  height: 385px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 47px 0px 48px 0px;
`;
const VixHabeoScaevolaP = styled.div`
  width: 470px;
  height: 103px;
  align-self: stretch;
  margin: 0px 0px 32px 0px;
  font-size: 20px;
  font-family: DM Sans;
  line-height: 32px;
`;
const Button5 = styled.div`
  width: 83px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13px 43.5px 11px 43.5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #434ccc;
`;
const FlexColumn23 = styled.div`
  height: 570px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 198px 0px;
  background-color: rgba(67.3, 76.8, 204, 0.05);
`;
const FlexColumn24 = styled.div`
  height: 427px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 835px 0px 135px;
`;
const UsuVocentCopiosae = styled.div`
  align-self: flex-start;
  margin: 0px 0px 45px 0px;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  white-space: nowrap;
`;
const WhiteFlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 31px 0px;
  padding: 0px 88px 0px 0px;
  border-radius: 5px;
  background-color: #e8e8e8;
`;
const SunglowRectangle = styled.div`
  width: 382px;
  height: 10px;
  border-radius: 5px;
  background-color: #f1b505;
`;
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 31px 0px;
  padding: 0px 152px 0px 0px;
  border-radius: 5px;
  background-color: #e8e8e8;
`;
const SunsetOrangeRectangle = styled.div`
  width: 318px;
  height: 10px;
  border-radius: 5px;
  background-color: #e94a47;
`;
const WhiteFlexColumn6 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 288px 0px 0px;
  border-radius: 5px;
  background-color: #e8e8e8;
`;
const NavyBlueRectangle = styled.div`
  width: 182px;
  height: 10px;
  border-radius: 5px;
  background-color: #428dfc;
`;
const Clipuploading = styled.img`
  width: 956px;
  height: 754px;
  left: 484px;
  top: 720px;
  position: absolute;
`;
const GoldenrodFlexRow = styled.div`
  width: 1440px;
  gap: 84px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 79px 0px 100px 0px;
  background-color: #ffdd77;
`;
const FlexColumn25 = styled.div`
  width: 516px;
  gap: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const MeaModusVolumusAb = styled.div`
  align-self: stretch;
  font-size: 56px;
  font-family: DM Serif Display;
  line-height: 64px;
  white-space: nowrap;
`;
const FlexRow19 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 53px 0px 44px 0px;
`;
const DarkFieldDefault = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  font-family: DM Sans;
  white-space: pre-wrap;
  text-transform: uppercase;
`;
const Placeholder = styled.div`
  width: 40px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  padding: 12px 313px 10px 15px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #dadada;
  background-color: #ffffff;
`;
const FlexColumn26 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  } ;
`;
const Button6 = styled.div`
  width: 79px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13px 45.5px 11px 45.5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: DM Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #434ccc;
`;
const FlexColumn27 = styled.div`
  height: 342px;
  gap: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 29px 0px;
  background-color: rgba(67.3, 76.8, 204, 0.05);
`;
const FlexRow20 = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn28 = styled.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 130px 0px 0px;
`;
const Text38 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 23px 0px;
  font-size: 24px;
  font-family: DM Serif Display;
  line-height: 32px;
  white-space: nowrap;
`;
const ProEuApeirianSuav = styled.div`
  width: 270px;
  height: 79px;
  margin: 0px 0px 16px 0px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
`;
const FlexRow21 = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Path = styled.img`
  width: 9px;
  height: 18px;
  margin: 0px 13px 0px 0px;
`;
const Path1 = styled.img`
  width: 18px;
  height: 15px;
  align-self: flex-end;
  margin: 0px 10px 1px 0px;
`;
const Shape = styled.img`
  width: 18px;
  height: 18px;
`;
const FlexColumn29 = styled.div`
  height: 178px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 142px 0px 0px;
  padding: 7px 0px;
`;
const FlexColumn30 = styled.div`
  width: 57px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 1px 0px 0px;
`;
const FlexColumn31 = styled.div`
  width: 69px;
  height: 178px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 131px 0px 0px;
  padding: 7px 0px;
`;
const FlexColumn32 = styled.div`
  width: 69px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
`;
const FlexColumn33 = styled.div`
  height: 176px;
  gap: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 30px 0px 0px;
  padding: 8px 0px;
`;
const FlexColumn34 = styled.div`
  height: 192px;
  gap: 39px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const FlexColumn37 = styled.div`
  gap: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LOGOAllRi = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: DM Sans;
  line-height: 24px;
  text-align: right;
  white-space: nowrap;
`;
