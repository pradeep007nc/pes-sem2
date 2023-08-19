"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var component = new like_1.LikeComponent(10, true);
component.likesCount = 2;
component.onClick();
console.log("likes count: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));
