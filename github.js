class Github {
    constructor() {
        this.client_id = 'acd5004036578953180c';
        this.client_secret = '0be266595212aad737676afddf44a43d5f8e2b40';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile: profile ,
            repos: repos
        }
    }
}