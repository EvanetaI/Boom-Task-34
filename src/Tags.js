export default function Tags(props) {
    return (
        <div className="tags">
            {props.tags.map(tag =>{
                return <div className="tag" tags={tag}></div>
            })}
        </div>
    )

  }