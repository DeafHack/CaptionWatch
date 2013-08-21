class ApplicationModel < ActiveResource::Base

  def initialize(*params)
    self.site = "http://captionwatch-api.dev"
    self.user = "admin"
    super(*params)
  end

end
