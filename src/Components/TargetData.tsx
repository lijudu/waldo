interface Target {
    name: string;
    xCoord: number[];
    yCoord: number[]; 
    found: boolean; 
}

const prisoner: Target = {
    name: 'prisoner',
    xCoord: [130, 190], 
    yCoord: [360, 410], 
    found: false,
    // top left 
}

const guards: Target = {
    name: 'guard',
    xCoord: [380, 415],
    yCoord: [1435, 1490],
    found: false
    // bottom left 
}

const hanging: Target = {
    name: 'hanging',
    xCoord: [650, 690],
    yCoord: [830, 920], 
    found: false
    // middle
}

export { prisoner, guards, hanging }