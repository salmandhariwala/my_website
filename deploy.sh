#!/usr/bin/env bash
aws s3 rm --profile personal s3://salmandhariwala.com --recursive
aws s3 sync --profile personal --acl public-read . s3://salmandhariwala.com
aws s3 rm --profile personal s3://salmandhariwala.com/.git --recursive
aws s3 rm --profile personal s3://salmandhariwala.com/.idea --recursive