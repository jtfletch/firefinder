import spinner from './spinner.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" className="spinner" />
            <h1 className="loading-text">Fetching Data...</h1>
        </div>
    );
};

export default Loader;