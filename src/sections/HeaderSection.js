import { ScrollingGif, Background } from '../ScrollingInteractions';

export {NamingHeader}

// NamingIMAGES.N_Header.cloudstair
function NamingHeader({contentImages}) {
    const cloudStairImg = <img src={contentImages.cloudstair} alt="testImage" style={{ width: "100%", height: "auto" }} />
    const cloudImg = <img src={contentImages.cloud} alt="testImage" style={{ width: "100%", height: "auto" }} />

return (
    <div style={{ height: "100vh", width: "100%"}}>
       {/* <Background backgrounds={[gradientDefault, "#202020"]} softTransitions={[0, 0.1]} scrollInfo={[0.75, 0.25]}> */}
            {/* <TelescopingContent child={cloudImg} positions={[[0, 0], [-1043, -826]]} scrollInfo={[0, 0.5]} />
            <TelescopingContent child={cloudStairImg} positions={[[window.innerWidth - 1106, window.innerHeight - 779], [window.innerWidth, window.innerHeight]]} scrollInfo={[0, 0.5]} /> */}
        {/* </Background> */}
    </div> 
  );
}