import { Directive, Input, HostListener } from "@angular/core";
@Directive({
  selector: "[text-copy]"
})
export class TextCopyDirective {
  @Input("text-copy") text: string;
  constructor() {}
  @HostListener("click") copyText() {
    var textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.style.top = "-999px";
    textArea.style.left = "-999px";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.value = this.text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log(msg);
    } catch (err) {
      console.log("unable to copy");
    }
    document.body.removeChild(textArea);
  }
}
export const TEXT_COPY_DIRECTIVES = [TextCopyDirective];
