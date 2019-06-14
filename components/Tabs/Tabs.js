class TabLink {
  constructor(element) {
    // 4 Assign this.element to the passed in DOM element
    // this.element;
    this.tabElementProperty = element;
    //  console.log(this.tabElementProperty)


    //  5 Get the custom data attribute on the Link
    // this.data;
    this.data = this.tabElementProperty.dataset.tab;
    // console.log(this.tabElementProperty.dataset.tab)


    //  6 Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
    // console.log(this.itemElement)


    //  7 Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);


    // 13 Add a click event listener on this instance, calling the select method on click
this.tabElementProperty.addEventListener('click', (event) => {
  this.select()
})

  };

  select() {
    //  9 Get all of the elements with the tabs-link class
    // const links;
const links = document.querySelectorAll('.tabs-link')
// console.log('tab click')

    // 10 Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'))


    // 11 Add a class named "tabs-link-selected" to this link
    // this.element;
this.tabElementProperty.classList.add('tabs-link-selected');


    // 12 Call the select method on the item associated with this link
this.tabItem.select()
    
  }
}

class TabItem {
  constructor(element) {
    // 8 Assign this.element to the passed in element
    // this.element;\
    this.element = element;
    // console.log(this.element)
  }

  select() {
    // 14 Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');


    // 15 Remove the class "tabs-item-selected" from each element
items.classList.remove('tabs-item-selected')


    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

//  START HERE: 

// - 1 Select all classes named ".tabs-link" and assign that value to the links variable
links = document.querySelectorAll('.tabs-link');
// console.log(links)

// -  2 With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
links.forEach(link => {
  // - 3 In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  // console.log(link)
  return new TabLink(link)
});