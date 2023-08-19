import { LikeComponent } from "./like";

let component = new LikeComponent(10, true);
component.likesCount = 2;
component.onClick();
console.log(`likes count: ${component.likesCount}, isSelected: ${component.isSelected}`);