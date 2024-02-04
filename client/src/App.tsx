import Button from '@/components/button/Button';
import Google from "../public/google.png"

function App() {
  const divStyles = {
    padding: '20px',
    margin: '10px',
    backgroundColor: '#121212',
  };

  return (
    <>
      <div style={divStyles}>
        <Button linkTo="/some-page" icon={<img src={Google} style={{ width: "21px", height: "21px" }} alt="A" />}>
        Continue whith Google
        </Button>
        <Button linkTo="/some-page" icon={<img src={Google} style={{ width: "21px", height: "21px" }} alt="A" />}>
        Continue whith Google
        </Button>
        <Button linkTo="/some-page" icon={<img src={Google} style={{ width: "21px", height: "21px" }} alt="A" />}>
        Continue whith Google
        </Button>
      </div>
    </>
  );
}

export default App;
