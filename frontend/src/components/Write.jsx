import "./write.css"

function Write() {
    return(
        <div  className="write">
          <form className="writeform">
            <div className="writeFormGroup">
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
            </div>
            <div>
            <input type="text" placeholder="Name" className="writeInput writeName" ></input>
            </div>
            <div className="writeFormGroup">  
                <textarea className="writeInput writeText" placeholder="Description..." type="text"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>

          </form>
        </div>
    )
}
export default Write;