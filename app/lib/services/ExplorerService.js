
class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;

    }
    static getAmountOfExplorersByMission(explorers, mission){
        const totalExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        const totalExplorersInNode = totalExplorersByMission.length;
        return totalExplorersInNode;

    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    static getExplorersByStack(explorers, stack){
        const explorersInNodeWithStack = explorers.filter((explorer) => explorer.stacks == stack);
        const usernamesOnStack = explorersInNodeWithStack.map((explorer) => explorer.githubUsername);
        return usernamesOnStack;
    }
}

module.exports = ExplorerService;

