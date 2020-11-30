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
  wizard = loadImage('./charactercreator/wizard.png');
  rogue = loadImage('./charactercreator/rogue.png');
    
  forest = loadImage('./charactercreator/forestbg.png');
  tavern = loadImage('./charactercreator/tavernbg.png');
  rocks = loadImage('./charactercreator/rocksbg.png');
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
  
    
    changeBackground();
    changeClothes();
    
    fill(255);
    rectMode(CENTER);
    rect(windowWidth/2, 145, 200, 10);
    fill(0);
    text(nameInput.value(), windowWidth/2, 150);
    rectMode(CORNER);
  
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
    if(clothesSelect.value() === 'knight'){
        changeBackground();
        fill(skinColor.color());
        ellipse(740, 235, 49, 49);
        rect(702, 258, 70, 59);
        image(knight, 700, 200);
    } else if(clothesSelect.value() === 'wizard'){
        changeBackground();
        fill(skinColor.color());
        ellipse(740, 260 ,43, 43);
        rect(710, 290 ,59, 39);
        image(wizard, 700, 200);
    } else{
        changeBackground();
        fill(skinColor.color());
        ellipse(744, 235, 49, 49);
        rect(710, 258, 70, 55);
        image(rogue, 700, 200);
    } 
}

function changeBackground(){
    if(backgroundSelect.value() === 'forest'){
        image(forest, 500, 0);
    } else if(backgroundSelect.value() === 'tavern'){
        image(tavern, 500, 0);
    } else if(backgroundSelect.value() === 'rocks'){
        image(rocks, 500, 0);
    } else{
        image(water, 500, 0);
    }
}

function randomize() {
    let bckgrndArr = ['forest', 'tavern', 'rocks', 'water'];
    backgroundSelect.selected(random(bckgrndArr));
    
    let clothesArr = ['knight', 'wizard', 'rogue'];
    clothesSelect.selected(random(clothesArr));
    
    //random skin color as well
}
