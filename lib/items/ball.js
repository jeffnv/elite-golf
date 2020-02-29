import GameItem from "../base_classes/game_item";
import Vector from "../util/vector";
import GolfDraw from "../util/golf_draw";

export default class Ball extends GameItem {
    constructor(loc, level) {
        super()
        this.startLoc = {
            x: loc.x,
            y: loc.y
        };
        this.loc = {
            x: loc.x,
            y: loc.y
        };
        this.level = level;
        this.velocity = new Vector(0, 0);

    }
    moving() {
        return this.velocity.magnitude > 0;
    }
    reset() {
        this.loc.x = this.startLoc.x;
        this.loc.y = this.startLoc.y;
        this.velocity.magnitude = 0;
    }

    render(context) {
        this.renderBall(context);
        //this.renderMovementVector(context);
        //useful for debugging bounces, can see direction of travel
    }

    renderBall(context) {
        GolfDraw.drawCircle(context, {
            color: 'white',
            radius: 5,
            centerX: this.loc.x,
            centerY: this.loc.y
        });
    }

    renderMovementVector(context) {
        var offsets = this.velocity.toOffsets();
        var vEnd = {
            x: this.loc.x + offsets.x * 50,
            y: this.loc.y + offsets.y * 50
        };
        GolfDraw.drawLine(context, {
            color: 'white',
            width: 2,
            start: this.loc,
            end: vEnd
        })
    }

    hit(force, direction) {
        //to prevent repeated ball wall bounce weirdness
        //dissallow bouncing off the same wall consecutively 
        delete this.lastBouncedWall;
        var magnitude = force / 20;
        this.velocity = new Vector(magnitude, direction);
    }
    move() {
        var offsets = this.velocity.toOffsets();
        this.loc.x += offsets.x;
        this.loc.y += offsets.y;
        this.applyFriction();
        this.processCollisions();
    }

    processCollisions() {
        var ball = this;
        this.level.walls.forEach(function (wall) {
            if (wall.nearWall(ball.loc) && ball.lastBouncedWall != wall) {
                ball.lastBouncedWall = wall;
                var wallAngle = Vector.fromCoords(wall.start, wall.end).direction;
                var ballAngle = ball.velocity.direction;
                var newAngle = 2 * wallAngle - ballAngle;
                ball.velocity = new Vector(
                    ball.velocity.magnitude,
                    newAngle
                );
            }
        });
    }

    applyFriction(vel) {
        var friction = this.level.frictionAtLoc(this.loc);
        if (this.velocity.magnitude > friction) {
            this.velocity.magnitude -= friction;
        } else {
            this.velocity.magnitude = 0;
        }
    }
};

