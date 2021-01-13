class Jobs {
    constructor(id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo){
        this.id = id;
        this.type = type;
        this.url = url;
        this.created_at = created_at;
        this.company = company;
        this.company_url = company_url;
        this.location = location;
        this.title = title;
        this.description = description;
        this.how_to_apply = how_to_apply;
        this.company_logo = company_logo;
    }
}
export default Jobs;