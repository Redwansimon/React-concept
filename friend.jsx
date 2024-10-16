export default function Friend ({friend}){
    console.log(friend)
    return(
        <div className="entity">
            <h3>friends NAME :{friend.name}  </h3>
            <p>friends Email :{friend.email}  </p>
        </div>
    )
}