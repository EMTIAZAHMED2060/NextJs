const DynamicPage = ({params, searchParams}) => {
    
    return (
        <div>
        <h1>Dynamic Page {params.id} </h1>
        <h2>Search by : {searchParams.category}</h2>
        </div>
    );
};

export default DynamicPage;