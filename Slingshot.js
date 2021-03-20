class Slingshot {

    constructor(bodyA, pointB) {

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.2,
            length: 10
        }

        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);

    }

    fly() {
        this.slingshot.bodyA = null;
    }

    attach(body) {
        this.slingshot.bodyA = body;
    }

    display() {

        if(this.slingshot.bodyA) {

            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;

            push();
            stroke("Darkturquoise");
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();

        }

    }
    
}

