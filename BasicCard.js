// creating instance of  BasicCard
let BasicCard = function(front, back, err) {

    if (err) throw err;

    if (this instanceof BasicCard) {
        this.front = front,
            this.back = back
    }

    else {
        return new BasicCard(front, back)
    }
}
module.exports = BasicCard;
