


function ProfilePicture() {

    const imageUrl = './src/assets/deer.jpg';

    const handleClick = (e) => {
        //alert("ouch");
        e.target.style.display = 'none';
        console.log(e);
    }
    
    return (
        <>
            <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
        </>
    );
};

export default ProfilePicture;