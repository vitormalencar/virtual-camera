class Vertex {
    constructor(x, y, z) {
        this.x = parseFloat(x)
        this.y = parseFloat(y)
        this.z = parseFloat(z)
    }
}

class Vertex2D {
    constructor(x, y) {
        this.x = parseFloat(x)
        this.y = parseFloat(y)
    }
}

class Cube {
    constructor(center, edgeLength) {
        let d = edgeLength / 2

        this.vertices = [
            new Vertex(center.x - d, center.y - d, center.z + d),
            new Vertex(center.x - d, center.y - d, center.z - d),
            new Vertex(center.x + d, center.y - d, center.z - d),
            new Vertex(center.x + d, center.y - d, center.z + d),
            new Vertex(center.x + d, center.y + d, center.z + d),
            new Vertex(center.x + d, center.y + d, center.z - d),
            new Vertex(center.x - d, center.y + d, center.z - d),
            new Vertex(center.x - d, center.y + d, center.z + d)
        ]

        // Group vertex by faces

        this.faces = [
            [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
            [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
            [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
            [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
            [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
            [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]
        ]
    }
}
