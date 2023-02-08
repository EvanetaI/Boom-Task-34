export default function Tags(props) {
    return (
        <div className="tags">
            {props.tags.map(tag =>{
                return <tag className="tag" tags={tag}>#{tag}</tag>
            })}
        </div>
    )

  }