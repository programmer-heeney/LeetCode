/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let max = 0;
    const position = {x: 0, y: 0, direction: 'y'};
    commands.map(command => {
        if(command === -1){
            switch (position.direction) {
                case 'y': {
                    position.direction = 'x';
                    break;
                }
                case 'x': {
                    position.direction = '-y';
                    break;
                }
                case '-y': {
                    position.direction = '-x';
                    break;
                }
                case '-x': {
                    position.direction = 'y';
                    break;
                }
            }
        } else if(command === -2) {
            switch (position.direction) {
                case 'y': {
                    position.direction = '-x';
                    break;
                }
                case 'x': {
                    position.direction = 'y';
                    break;
                }
                case '-y': {
                    position.direction = 'x';
                    break;
                }
                case '-x': {
                    position.direction = '-y';
                    break;
                }
            }
        } else if (command >= 1 && command <= 9) {
            switch (position.direction) {
                case 'y': {
                    for(let i=0; i<command; i++){
                        position.y = position.y + 1;
                        if(obstacles.find(obstacle => {
                            return obstacle[0] === position.x && obstacle[1] === position.y ? true : false; 
                        })){
                            position.y = position.y - 1;
                        }
                    }
                    break;
                }
                case 'x': {
                    for(let i=0; i<command; i++){
                        position.x = position.x + 1;
                        if(obstacles.find(obstacle => {
                            return obstacle[0] === position.x && obstacle[1] === position.y ? true : false; 
                        })){
                            position.x = position.x - 1;
                        }
                    }
                    break;
                }
                case '-y': {
                    for(let i=0; i<command; i++){
                        position.y = position.y - 1;
                        if(obstacles.find(obstacle => {
                            return obstacle[0] === position.x && obstacle[1] === position.y ? true : false; 
                        })){
                            position.y = position.y + 1;
                        }
                    }
                    break;
                }
                case '-x': {
                    for(let i=0; i<command; i++){
                        position.x = position.x - 1;
                        if(obstacles.find(obstacle => {
                            return obstacle[0] === position.x && obstacle[1] === position.y ? true : false; 
                        })){
                            position.x = position.x + 1;
                        }
                    }
                    break;
                }
            }
            console.log(position.direction, command, position.x, position.y);
        }
        max = Math.max(max, position.x**2 + position.y**2);
    });
    return max;
};