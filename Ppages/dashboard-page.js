class DashboardPage{
    get dashboardPageUrl(){
        return 'https://kasirdemo.belajarqa.com/dashboard'
    }

    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.dashboardPageUrl)
    }
}

module.exports = new DashboardPage();