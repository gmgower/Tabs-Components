class Dropdown {
  constructor(dropDownElement) {
    
    // Assign this.element to the dropdown element
    // this.element;
    this.dropDownElementProperty = dropDownElement;
    // console.log(this.dropDownElementProperty)


    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.dropDownElementProperty.querySelector('.dropdown-button');
    // console.log(this.button)


    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.dropDownElementProperty.querySelector('.dropdown-content');
    // console.log(this.content)
    

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())}

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));