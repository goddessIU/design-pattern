class SearchWord {

}

class Prototype {
    private currentKeywords = new Map<string, SearchWord>();
    private lastUpdateTime: number = -1;

    public refresh(): void {
        const newKeywords: Map<string, SearchWord> = Object.create(this.currentKeywords);
        const toBeUpdatedSearchWords = getSearchWords(this.lastUpdateTime);
        const maxNewUpdatedTime = this.lastUpdateTime;
        const newKeywordsKeys = Array.from(newKeywords.keys());

        for (const searchword of toBeUpdatedSearchWords) {
            if (searchword.getLastUpdateTime() > maxNewUpdatedTime) {
                maxNewUpdatedTime = searchword.getLastUpdateTime();
            }

            if (searchword.getKeyword() in newKeywords) {
                newKeywords.remove(searchword.getKeyword());
            }

            newKeywords.set(searchword.getKeyword(), searchword);
        }

        this.lastUpdateTime = maxNewUpdatedTime;
        this.currentKeywords = newKeywords;
    }
}