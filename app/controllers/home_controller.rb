class HomeController < ApplicationController
  def index
  end

  def thanks
    @complaint = Complaint.find(session[:complaint_id])
    # session[:complaint_id]= nil
  end
end
