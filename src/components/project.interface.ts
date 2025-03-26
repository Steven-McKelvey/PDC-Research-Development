// defines an interface (type) for the json data found in assets/projects.json
export interface Project {
    [key: string]: 
    {
        description: string,
        mpiLearningObjective: string,
        mtLearningObjective: string,
        gpuLearningObjective: string,
        githubLink: string
    }
}