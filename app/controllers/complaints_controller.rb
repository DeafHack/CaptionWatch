class ComplaintsController < ApplicationController
  def create
    # @company = Company.create(params)
    # @product = Product.create(params)
    params[:complaint][:product_id]=1
    @complaint = Complaint.new(params)

    if @complaint.save
      session[:complaint_id]= @complaint.id
      redirect_to '/thanks'
    end
  end

  def index
    @company = Company.new(name: '')
    @product = Product.new(name: '')
    @complaint = Complaint.new(url: '')
  end

  def show
  end
end
