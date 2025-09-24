

async function OtherItems() {

  

    const response = await fetch(`${process.env.API_BASE_URL}/listings`);
    const data = await response.json();
    const userId = data.map(array => array.userId);
    console.log(data);


    return (  
        <>
        <h2>Other items from this Swapper</h2>
        </>
    );
}

export default OtherItems;