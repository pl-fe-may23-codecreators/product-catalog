import workingCat from '../images/workingCat.webp';

const WorkingOnItPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px'}}>
      <img src={workingCat} alt="" />
      <h1>We're working on IT</h1>
    </div>
  );
};

export default WorkingOnItPage;
