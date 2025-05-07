/** Class representing the metadata of a Video, provides a standard type for scraping into Stash */
class VideoData{
    constructor({title = "", date = Date(0), tags = [], performers = [], url = "", site = "", studio = "", details = "", image = "",id = 0, dlKey = "", dlUrl = "", downloaded = false, counter = 0, source = "Def_AutoDLv1.2"}){
        this.title = title
        this.date = date
        this.tags = tags
        this.url = url
        this.site = site
        this.studio = studio
        this.details = details
        this.image = image
        this.id = id
        this.dlKey = dlKey
        this.dlUrl = dlUrl
        this.downloaded = downloaded
        this.performers = performers
        this.counter = counter
        this._source = source
    }

    toString(){
        return JSON.stringify(this)
    }

    /**
     * 
     * @param {boolean} studio - Includes studio in filename if true
     * @param {boolean} id - Includes id in filename if true
     * @param {boolean} title - Includes title in filename if true
     * @param {string} type - File extension
     * @returns {string} - Filename based on the video's data
     */
    toFileName(studio = true, id = true, title = true, type = ".mp4", counter = false, site = false){
         let elements = []
         
         if (site) {
            elements.push(this.site)
         }
         if(studio){
            elements.push(this.studio)
         }
         if(title){
            elements.push(this.title)
         }
        if(id){
            elements.push(this.id)
        }
        if(counter && this.counter > 0){
            elements.push(this.counter)
        }
        let filename = elements.join('.') + '_' + this.id + type
        filename = filename.replace(/[/\\?%*:|"<>]/g, '-');
        return filename
    }
}
