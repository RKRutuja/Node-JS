class IAuditable {
    Audit() {
        throw new Error("Method 'Audit()' must be implemented.");
    }
}
module.exports = IAuditable;