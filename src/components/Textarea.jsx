
import "../styles/components/textarea.sass";

export function Textarea() {
   return(
      <div className="textarea-wrapper">
         <textarea name="message" id="message" required ></textarea>
         <label htmlFor="message">Message</label>
      </div>
   )
}