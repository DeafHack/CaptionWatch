class ComplaintsController < ApplicationController
  def create
    # @company = Company.create(params)
    # @product = Product.create(params)
    params[:complaint][:product_id]=1
    @complaint = Complaint.create(params)

    # if @complaint.save!
    #   binding.remote_pry
    #   respond_to do |format|
    #     format.html { redirect_to root_path }
    #     format.json { render json: @complaint}
    #   end
    # else
    #     render 'show'
    # end

  end

  def index
    @company = Company.new(name: '')
    @product = Product.new(name: '')
    @complaint = Complaint.new(url: '')
  end

  def show
  end
end
