import {HighlightText} from '../TextInteractions';

export {NamingIntro}

//NamingSTRINGS.N_Intro.paragraphs : array
function NamingIntro({contentImages, contentText}) {
    //set parent height






return (
    <div className="NamingIntroWrap" style={{height: '100vh'}}>
        {/* <img
        src={contentImages.cloudstair}
        alt="Cloud Stair"
        style={{
          zIndex: 0,
          position: 'absolute',
          width: "100%", height: "auto"
          // Add other styles as needed
        }}
      /> */}
        <HighlightText paragraphs={contentText.paragraphs}/>
    </div>
  );
}