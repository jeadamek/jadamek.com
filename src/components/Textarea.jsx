
import "../styles/components/textarea.sass";

export function TextArea() {
   return(
      <div className="textarea-wrapper">
         <textarea name="" id="" cols="30" rows="10"></textarea>
         <label htmlFor="">Message</label>
      </div>
   )
}