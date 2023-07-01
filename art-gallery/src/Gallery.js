function Gallery (props){
    return(
        <div style={{'width': '100%'}}>
            <img style={{'height': '400px'}} src={props.objectImg} alt={props.title} />
            <p>The Image above was drawing by "{props.artist}" in {props.Year}.</p>
        </div>
    )
}

export default Gallery