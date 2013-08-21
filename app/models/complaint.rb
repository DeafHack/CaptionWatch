class Complaint < ActiveResource::Base
    self.site = "http://captionwatch-api.dev"
    self.user = "admin"
  # attr_accessor :url, :address, :custom_blurb
  # attr_reader :url, :address, :custom_blurb
end
