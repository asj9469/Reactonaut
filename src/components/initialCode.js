export const initialCode = `
function LandingPage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const containerStyle = {
    backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)',
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    color: 'white',
  };

  const buttonStyle = {
    background: 'white',
    color: 'blue',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Our Website</h1>
      <p>
        We provide top-notch services and solutions for our customers. Explore our offerings and find the best fit for your needs!
      </p>
      <button onClick={handleButtonClick} style={buttonStyle}>
        {buttonClicked ? 'Thanks for clicking!' : 'Learn More'}
      </button>
    </div>
  );
}
`;