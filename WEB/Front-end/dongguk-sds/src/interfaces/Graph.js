class Graph { // Graph({ id, data[], keys, indexBy, graph_name, graph_coordinate, width, height, kind})
    constructor(id, data, keys, indexBy, graph_name, graph_coordinate, width, height, kind) {
        this.id = id;
        this.data = data;
        this.keys = keys;
        this.indexBy = indexBy;
        this.graph_name = graph_name;
        this.graph_coordinate = graph_coordinate;
        this.width = width;
        this.height = height;
        this.kind = kind;
    }
}