import Platform from '../Platform';
import Content from './Content';

function Detail({ platformData, setVisible }) {
  // return (
  //   <div>
  //     <Platform
  //       title={platformData.platformName}
  //       time={platformData.createdDate}
  //       imageLink={platformData.platformImage}
  //     />
  //     <Content
  //       setVisible={setVisible}
  //       content={platformData.platformDescription}
  //     />
  //   </div>
  // );
  return (
    <div>
      {Platform(
        platformData.platformName,
        platformData.createdDate,
        platformData.platformImage
      )}
      {/* {Content(platformData.platformDescription, setVisible)} */}
      <Content
        setVisible={setVisible}
        content={platformData.platformDescription}
      />
    </div>
  );
}

export default Detail;
