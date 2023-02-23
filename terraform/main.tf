terraform {
  backend "http" {}

  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "domain_name" {}

variable "digitalocean_token" {}

variable "public_key" {}

variable "user_data_file" {}

provider "digitalocean" {
  token = var.digitalocean_token
}

resource "digitalocean_ssh_key" "this" {
  name       = var.domain_name
  public_key = var.public_key
}

resource "digitalocean_droplet" "this" {
  image     = "ubuntu-20-04-x64"
  name      = var.domain_name
  region    = "sfo3"
  size      = "s-1vcpu-1gb"
  user_data = file(var.user_data_file)
  ssh_keys  = [digitalocean_ssh_key.this.fingerprint]
}

resource "digitalocean_domain" "this" {
  name = var.domain_name
}

resource "digitalocean_record" "root" {
  type   = "A"
  domain = digitalocean_domain.this.name
  name   = "@"
  ttl    = "1800"
  value  = digitalocean_droplet.this.ipv4_address
}

resource "digitalocean_record" "cms" {
  type   = "A"
  domain = digitalocean_domain.this.name
  name   = "cms"
  ttl    = "1800"
  value  = digitalocean_droplet.this.ipv4_address
}

resource "digitalocean_project" "this" {
  name        = var.domain_name
  environment = "Production"
  resources   = [digitalocean_droplet.this.urn, digitalocean_domain.this.urn]
}
