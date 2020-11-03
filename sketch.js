let randomButton;
let backgroundSelect;
let clothesSelect;
let nameInput;
let skinColor;

let knight;
let rogue;
let wizard;

let forest;
let tavern;
let rocks;
let water;

function preload() {
  knight = loadImage('./charactercreator/knight.png');
  wizard = loadImage('./charactercreater/wizard.png');
  rogue = loadImage('./charactercreator/rogue.png');
    
  forest = loadImage('./charactercreator/forestbg.png');
  tavern = loadImage('./charactercreator/tavernbg.png');
  rocks = loadImage('./charactercreator/rockbg.png');
  water = loadImage('./charactercreator/waterbg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    
    randomButton = createButton('randomize');
    randomButton.style('width','90px');
    randomButton.mousePressed(randomize);
    
    //background
    backgroundSelect = createSelect();
    backgroundSelect.option('forest');
    backgroundSelect.option('tavern');
    backgroundSelect.option('rocks');
    backgroundSelect.option('water');
    
    backgroundSelect.changed(changeBackground);
    
    //clothes
    clothesSelect = createSelect();
    clothesSelect.option('knight');
    clothesSelect.option('wizard');
    clothesSelect.option('rogue');
    
    clothesSelect.style('width', '75px');
    clothesSelect.changed(changeClothes);
    textAlign(CENTER);
    fill(255, 0, 0);
    
    //name
    nameInput = createInput('');
    nameInput.size(90, 20);
    
    //skin color
    skinColor = createColorPicker('#473013');

    repositionButtons();
    
}

function draw() {
  background(220);
  text(nameInput.value(), windowWidth/2, 300);
  text(skinColor.value(), 300, 300);
  
    //this would have been the body... If it worked
  fill(skinColor.color());
  ellipse(windowWidth/2, windowHeight/2, 60, 60);
  
}

function repositionButtons() {
    backgroundSelect.position(windowWidth/2, windowHeight/1.2);
    clothesSelect.position(windowWidth/3, windowHeight/1.2);
    randomButton.position(windowWidth/1.5, windowHeight/1.2);
    nameInput.position(windowWidth/8, windowHeight/1.2);
    skinColor.position(windowWidth/7, windowHeight/1.1);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    repositionButtons();
}

function changeClothes(){
    //image based on selection
    image(knight, windowWidth/2, 0);
}

function changeBackground(){
    if(backgroundSelect.value() === 'forest'){
        image(forest, windowWidth/2, 0);
    } else if(backgroundSelect.value() === 'tavern'){
        image(tavern, windowWidth/2, 0);
    } else if(backgroundSelect.value() === 'rocks'){
        image(rocks, windowWidth/2, 0);
    } else{
        image(water, windowWidth/2, 0);
    }
}

function randomize() {
    let bckgrndArr = ['forest', 'tavern', 'rocks', 'water'];
    backgroundSelect.selected(random(bckgrndArr));
    
    let clothesArr = ['knight', 'wizard', 'rogue'];
    clothesSelect.selected(random(clothesArr));
    
    //random skin color as well
}
