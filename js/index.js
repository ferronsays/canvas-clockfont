/*
Copyright (c) 2013 mikeferron.com, ferronsays at codepen.io (http://codepen.io/ferronsays)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//matrices of clock times for each character
var characterMatrices = new Array();
characterMatrices["1"] = [[[null, null], [null, null], [null, null]],[[null, null], [6, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["2"] = [[[null, null], [null, null], [null, null]],[[3, 15], [9, 30], [null, null]],[[6, 15], [12, 45], [null, null]],[[12, 15], [9, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["3"] = [[[null, null], [null, null], [null, null]],[[3, 15], [6, 45], [null, null]],[[3, 15], [9, 0], [null, null]],[[3, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["4"] = [[[null, null], [null, null], [null, null]],[[6, 30], [6, 30], [null, null]],[[12, 15], [12, 30], [null, null]],[[null, null], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["5"] = [[[null, null], [null, null], [null, null]],[[6, 15], [9, 45], [null, null]],[[12, 15], [6, 45], [null, null]],[[3, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["6"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 45], [null, null]],[[12, 30], [6, 45], [null, null]],[[12, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["7"] = [[[null, null], [null, null], [null, null]],[[3, 15], [9, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["8"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 15], [12, 45], [null, null]],[[12, 15], [9, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["9"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 15], [12, 30], [null, null]],[[3, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["0"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["a"] = [[[null, null], [null, null], [null, null]],[[3, 30], [6, 45], [null, null]],[[3, 30], [12, 30], [null, null]],[[3, 0], [12, 15], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["b"] = [[[6, 30], [null, null], [null, null]],[[12, 30], [9, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["c"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9 ,45], [null, null]],[[12, 30], [null, null], [null, null]],[[12, 15], [9, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["d"] = [[[null, null], [6, 30], [null, null]],[[3, 30], [12, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [9, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["e"] = [[[null, null], [null, null], [null, null]],[[6, 15], [6, 45], [null, null]],[[12, 30], [9, 0], [null, null]],[[3, 0], [9, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["f"] = [[[null, null], [3, 30], [null, null]],[[3, 15], [12, 15], [null, null]],[[null, null], [12,30], [null, null]],[[null, null], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["g"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 30], [null, null]],[[3, 15], [9, 0], [null, null]]];
characterMatrices["h"] = [[[6, 30], [null, null], [null, null]],[[12, 15], [6, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 0], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["i"] = [[[null, null], [6, 30], [null, null]],[[null, null], [6, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["j"] = [[[null, null], [6, 30], [null, null]],[[null, null], [6, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[3, 15], [9, 0], [null, null]]];
characterMatrices["k"] = [[[6, 30], [null, null], [null, null]],[[12, 30], [7.5, 37.5], [null, null]],[[12, 30], [9, 30], [null, null]],[[12, 0], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["l"] = [[[null, null], [6, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 15], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["m"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [9, 30]],[[12, 30], [12, 30], [12, 30]],[[12, 0], [12, 0], [12, 0]],[[null, null], [null, null], [null, null]]];
characterMatrices["n"] = [[[null, null], [null, null], [null, null]],[[6, 15], [6, 45], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 0], [12, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["o"] = characterMatrices["0"];
characterMatrices["p"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 30], [12, 45], [null, null]],[[12, 0], [null, null], [null, null]]];
characterMatrices["q"] = [[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 30], [null, null]],[[null, null], [12, 15], [null, null]]];
characterMatrices["r"] = [[[null, null], [null, null], [null, null]],[[6, 15], [9, 30], [null, null]],[[12, 30], [null, null], [null, null]],[[12, 0], [null, null], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["s"] = characterMatrices["5"]
characterMatrices["t"] = [[[null, null], [6, 30], [null, null]],[[null, null], [12, 45], [9, 45]],[[null, null], [12, 30], [null, null]],[[null, null], [12, 15], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["u"] = [[[null, null], [null, null], [null, null]],[[6, 30], [6, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 15], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["v"] = [[[null, null], [null, null], [null, null]],[[6, 30], [3, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 45], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices["w"] = [[[null, null], [null, null], [null, null]],[[6, 30], [6, 30], [6, 30]],[[12, 30], [12, 30], [12, 30]],[[12, 15], [12, 45], [12, 45]],[[null, null], [null, null], [null, null]]];
characterMatrices["x"] = [[[null, null], [null, null], [null, null]],[[4.5, 22.5], [null, null], [7.5, 37.5]],[[null, null], [1.5, 22.5], [null, null]],[[1.5, 7.5], [null, null], [10.5, 52.5]],[[null, null], [null, null], [null, null]]];
characterMatrices["y"] = [[[null, null], [null, null], [null, null]],[[6, 30], [6, 30], [null, null]],[[12, 30], [12, 30], [null, null]],[[12, 15], [12, 30], [null, null]],[[3, 15], [12, 45], [null, null]]];
characterMatrices["z"] = [[[null, null], [null, null], [null, null]],[[3, 15], [9, 15], [9, 37.5]],[[null, null], [1.5, 37.5], [null, null]],[[1.5, 15], [9, 15], [9, 45]],[[null, null], [null, null], [null, null]]];
//characterMatrices["."] = [[[null, null], [null, null], [null, null]],[[null, null], [null, null], [null, null]],[[3, 30], [9, 30], [null, null]],[[12, 15], [9, 0], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices[":"] = [[[null, null], [null, null], [null, null]],[[null, null], [null, null], [null, null]],[[1.5, 22.5], [10.5, 37.5], [null, null]],[[1.5, 22.5], [10.5, 37.5], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices[""] = [[[null, null], [null, null], [null, null]],[[null, null], [null, null], [null, null]],[[null, null], [null, null], [null, null]],[[null, null], [null, null], [null, null]],[[null, null], [null, null], [null, null]]];
characterMatrices[" "] = characterMatrices[""];

ClockFont = function(num_rows, num_cols, padding, canvas_id) {
  this.init(num_rows, num_cols, padding, canvas_id);
}

ClockFont.prototype.init = function(num_rows, num_cols, padding, canvas_id) {
  this.num_rows = num_rows, this.num_cols = num_cols, this.padding = padding;

  this.current_time = new Date().getTime();
  this.dt = 0;

  this.last_string = "";

  this.canvas = document.getElementById(canvas_id);

  this.string = "Canvas        ClockFont     ";
  this.last_string;

  this.canvas.width  = this.canvas.parentNode.innerWidth;
  this.fit();

  while(this.height > window.innerHeight)
  {
    this.canvas.width -= 1;
    this.fit();
  }

  this.ctx = this.canvas.getContext('2d');

  this.chars = new Array();

  var k = 0;

  for(var i = 0; i < num_rows; i++)
  {
    for(var j = 0; j < num_cols; j++)
    {
      var ch = new Character(this, k, i, j, this.character_width, this.character_height, canvas_id);

      this.chars.push(ch);

      k++;
    }
  }
}

ClockFont.prototype.fit = function()
{
  this.width = this.canvas.width;

  this.character_width = (this.width-this.padding*2)/this.num_cols;
  this.character_height = this.character_width * 5/3;

  this.canvas.height = this.character_height * this.num_rows + this.num_rows*this.padding;//(this.canvas.width-padding*2) / ((num_rows*2)/3) + padding*2;
  this.height = this.canvas.height;
  
  //this.canvas.style.left = (window.innerWidth - this.width)/2 - 75 + "px";
  //this.canvas.style.top = (window.innerHeight - this.height)/2 + "px";
}

ClockFont.prototype.getCanvasContext = function() {
  return this.ctx;
}

ClockFont.prototype.enable = function() {
  var that = this;

 window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     
    })();

  this.animate(new Date().getTime());
  
  return this;
}

ClockFont.prototype.animate = function(time)
{
    var that = this;
    requestAnimFrame( function(){ that.animate(new Date().getTime());} );
    this.update(time);
}

ClockFont.prototype.disable = function() {
  if (this.intervalId) {
    window.clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  return this;
}

ClockFont.prototype.update = function(time) {
  this.string = this.string.toLowerCase();

  this.dt = time - this.current_time;

  this.current_time = time;

  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.fillStyle = 'transparent';
  this.ctx.fillRect(0, 0, this.width, this.height); 

  var jumble = false;

  if(this.string != this.last_string)
    jumble = true;

  for (var i=0; i < this.chars.length; ++i) {
    this.chars[i].jumble = jumble;
    this.chars[i].update(this.string.slice(i, i+1), this.dt);
  }

  this.last_string = this.string;
}

ClockFont.prototype.resize = function() {

  this.canvas.width  = window.innerWidth;
  this.fit();

  while(this.height > window.innerHeight)
  {
    this.canvas.width -= 1;
    this.fit();
  }

  for (var i=0; i < this.chars.length; ++i) {
    this.chars[i].resize(this.character_width, this.character_height);
  }
};

/* Character */
Character = function(clockfont, position, row, col, width, height, canvas_id)
{
  this.init(clockfont, position, row, col, width, height, canvas_id);
}

Character.prototype.init = function(clockfont, position, row, col, width, height, canvas_id)
{
  this.clockfont = clockfont;
  this.position = position;
  this.row = row;
  this.col = col;
  this.width = width;
  this.height = height;
  this.jumble = true;
  this.canvas = document.getElementById(canvas_id);
  this.ctx = this.canvas.getContext('2d');
  this.clocks = new Array();

  var current_column = 0;
  var current_row = 0;
  var num_columns = 3;

  this.cell_w = (this.width)/3;
  this.cell_h = (this.height)/5;

  for(var i = 0; i < 15; i++)
  {
    var clock = new Clock(
        this,
        this.col*this.width + current_column*this.cell_w + this.cell_w/2 + this.clockfont.padding,
        this.row*this.height + current_row*this.cell_h + this.cell_h/2 + this.clockfont.padding, 
        this.cell_w/2,
        current_row,
        current_column,
        canvas_id
      );

    this.clocks.push(clock);

    current_column += 1;
    if(current_column == num_columns)
    {
      current_row += 1;
      current_column = 0;
    }
  }
}

Character.prototype.update = function(val, dt)
{
    for (var i=0; i < this.clocks.length; ++i) {
      this.clocks[i].jumble = this.jumble;
      this.clocks[i].update(val, dt);
    }
}

Character.prototype.resize = function(width, height) {
  this.width = width;
  this.height = height;
  this.cell_w = (this.width)/3;
  this.cell_h = (this.height)/5;

  for (var i=0; i < this.clocks.length; ++i) {
    this.clocks[i].resize();
  }
};

/* CLOCK */
Clock = function(ch, x, y, radius, r, c, canvas_id){
  this.init(ch, x, y, radius, r, c, canvas_id);
}

Clock.prototype.init = function(ch, x, y, radius, r, c, canvas_id)
{
  this.ch = ch;
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;
  this.jumble = true;
  this.radius = radius;
  this.borderWidth = 1;
  this.radius = this.radius - this.borderWidth;
  this.canvas = document.getElementById(canvas_id);
  this.ctx = this.canvas.getContext('2d');

  this.m_length = this.radius - 1;
  this.h_length = this.radius*3/4 >= this.m_length ? this.m_length - 2: this.radius*3/4 ;

  this.m_hand = new Hand(this.x, this.y, this.m_length, "#000", this.ctx);
  this.h_hand = new Hand(this.x, this.y, this.h_length, "#000", this.ctx);

  this.minutes = this.r;
  this.hours = this.c;
}

Clock.prototype.update = function(val, dt){

    var mx = characterMatrices[val];

    this.hours = mx[this.r][this.c][0];
    this.minutes = mx[this.r][this.c][1];

    if(this.jumble)
    {
      this.m_hand.last_time_val = this.m_hand.time_val;
      this.h_hand.last_time_val = this.h_hand.time_val;
    }

    this.m_hand.time_val = this.minutes;
    this.m_hand.jumble = this.jumble;
    this.m_hand.target_angle = Math.PI * (2.0 * minuteAngle(this.minutes) - 0.5);

    this.h_hand.time_val = this.hours;
    this.h_hand.jumble = this.jumble;
    this.h_hand.target_angle = Math.PI * (2.0 * hourAngle(this.hours) - 0.5);

    this.m_hand.update(dt);
    this.h_hand.update(dt);
}

Clock.prototype.resize = function() {

  this.x = this.ch.col*this.ch.width + this.c*this.ch.cell_w + this.ch.cell_w/2 + this.ch.clockfont.padding;
  this.y = this.ch.row*this.ch.height + this.r*this.ch.cell_h + this.ch.cell_h/2 + this.ch.clockfont.padding;
  this.radius = this.ch.cell_w/2;

  var m_length = this.radius - 1;
  var h_length = this.radius*3/4 >= m_length ? m_length - 2: this.radius*3/4;

  this.m_hand.x = this.x; this.m_hand.y = this.y; this.m_hand.length = m_length;
  this.h_hand.x = this.x; this.h_hand.y = this.y; this.h_hand.length = h_length;
};

/* HAND */
Hand = function(x, y, length, color, ctx){
  this.init(x, y, length, color, ctx);
};

Hand.prototype.init = function(x, y, length, color, ctx){

  this.x = x;
  this.y = y;

  this.length = length;
  this.color = color;
  this.alpha = 1;

  this.extra_angle = 0;
  this.angle = (-Math.PI/2) + Math.PI*2;
  this.last_angle = this.angle;
  this.target_angle = this.angle;

  this.time_val = 12;
  this.last_time_val;

  this.jumble = true;

  this.ctx = ctx;

  this.time_passed = 0;
  this.last_jumble_time = 0;

  this.difference;
}

Hand.prototype.update = function(dt){

    var new_vec;

    this.difference = this.target_angle - this.angle;
    
    while (this.difference < degreesToRadians(-180))
      this.difference += degreesToRadians(360);

    while (this.difference > degreesToRadians(180))
      this.difference -= degreesToRadians(360);

    while(this.difference < 0)
      this.difference += degreesToRadians(360);

    if(this.jumble)
    {
      this.last_jumble_time = this.time_passed;

      if(this.angle == this.target_angle)
      {
        this.difference = 0;
      }else{
        var current_vec = new Vec2(this.length * Math.cos(this.angle), this.length * Math.sin(this.angle));
        var goal_vec = new Vec2(this.length * Math.cos(this.target_angle), this.length * Math.sin(this.target_angle));
      
        current_vec.normalize();
        goal_vec.normalize();
      
        var dot_prod = current_vec.dot(goal_vec);
      }

      var min = 1; var max = 5;
      var turns = Math.floor(Math.random() * (max - min + 1)) + min;

      this.extra_angle = degreesToRadians(turns*360);

      this.start_angle = this.angle;

      this.end_angle = this.start_angle + this.difference + this.extra_angle;
    }

    var tm = 4000 + this.x*4;
    var tp = this.time_passed-this.last_jumble_time;
    var percent = tp/tm;

    var e = easeInOutQuad(percent, tp, this.start_angle, this.end_angle, tm);

    if(e >= this.end_angle)
      this.angle = this.target_angle;
    else
      this.angle = e;
   
    new_vec = new Vec2(this.length * Math.cos(this.angle), this.length * Math.sin(this.angle));

    this.ctx.save();
    this.ctx.lineWidth = 2;

    if(this.time_val === this.last_time_val)
    {
      //no change
      this.alpha = this.alpha;
      if(this.time_val === null)
        this.alpha = .2;
      else
        this.alpha = 1;
    }else{
      if(this.time_val === null && this.last_time_val !== null)
      {
        //fade out
        this.alpha = 1 - percent;
        this.alpha = this.alpha < .2 ?  .2 : this.alpha;
      }else if(this.time_val !== null && this.last_time_val === null){
        //fade in
        this.alpha = percent > .2 ? percent : .2;
      }
    }

    this.ctx.strokeStyle = "rgba(0, 0, 0,"+ this.alpha +")";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + new_vec.x, this.y + new_vec.y);
    this.ctx.stroke();
    this.ctx.restore();
    
    this.last_angle = this.angle;
    this.time_passed += dt;
}

/* SUPPORT FUNCTIONS */
function minuteAngle(minute){return minute === null ? 37.5/60 : minute/60;}
function hourAngle(hour){return hour === null ? 7.5/12 : hour/12;}
function degreesToRadians(degrees){return degrees*Math.PI/180;}
function Vec2(x_,y_)
{
  this.x = x_;
  this.y = y_;
  
  this.dot = function(vec_) { return (this.x*vec_.x+this.y*vec_.y); }
  this.length = function() { return Math.sqrt(this.dot(this)); }
  this.normalize = function() {var vlen = this.length();this.x = this.x/ vlen;this.y = this.y/ vlen;}
}
function easeInOutQuad(x, t, b, c, d) {
    if(t>d) return c;
    t /= d/2;
    if (t < 1) return (c-b)/2*t*t + b;
    t--;
    return -(c-b)/2 * (t*(t-2) - 1) + b;
}

var clockFont;
      var rows = 4, columns = 14;
      var auto_update;
      function initialize() {
        clockFont = new ClockFont(rows, columns, 0, "fg");
        clockFont.enable();

        auto_update = setInterval(function(){
          var new_string;

          var random = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          };  
          c = random(1, 4);

          switch(c){
            case 1:
              new_string = "Canvas        ClockFont     ";
              break;
            case 2:
              new_string = "A pen by      ferronsays";
              break;
            case 3:
              var d = new Date();
              var day_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()];
              var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ][d.getMonth()];
              var hours = d.getHours();
              var minutes = d.getMinutes();

              hours = hours > 12 ? hours - 12 : hours;
              hours = hours < 10 ? "0" + hours : hours;
              hours = hours == 0 ? 12 : hours;
            
              minutes = minutes < 10 ? "0" + minutes : minutes;

              new_string =  day_name + new Array(columns - day_name.length + 1).join(' ');
              new_string += month_name + " " + d.getDate() + new Array(columns - month_name.length - (d.getDate()+"").length).join(' ');
              new_string += hours+":"+minutes
              break;
            case 4:
              new_string = "click the iconto change the display";
              break;
            default:
              new_string = "";
          }

          clockFont.string = new_string;
        }, 10000);

      }
      
      window.onload = function() {
        initialize();

        document.getElementById('show-info').onmousedown = function(e) {
          document.getElementById('info').style.display = 'block';
          document.getElementById('show-info').style.display = 'none';
        };

        document.getElementById('close-info').onmousedown = function(e) {
          document.getElementById('info').style.display = 'none';
          document.getElementById('show-info').style.display = 'block';
        };

        document.getElementById('t').onkeyup = function(e){
          
          var v = this.value.replace(/(\r\n|\n|\r)/gm, "");
          v = v.replace(/[^a-z0-9 ]/gi,'');
          var ret = [];
          for(var i=0, len = v.length; i < len; i += columns) {
            ret.push(v.substr(i, columns))
          }
          this.value = ret.join("\n");
        };

        document.getElementById('change-display').onmousedown = function(e) {
          clockFont.string = document.getElementById('t').value.replace(/(\r\n|\n|\r)/gm, "");
          document.getElementById('info').style.display = 'none';
          document.getElementById('show-info').style.display = 'block';
          window.clearInterval(auto_update);
        };     

        window.onresize = function(e) {
          clockFont.resize();
        };
        
        clockFont.resize();
      };