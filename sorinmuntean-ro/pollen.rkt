#lang racket/base

(require "home.rkt")

(provide
 (all-from-out "home.rkt"))

(module+ setup
  (require racket/runtime-path)
  (provide (all-defined-out))

  (define-runtime-path home-module "home.rkt")
  (define compile-cache-active #f)
  (define render-cache-active #f)

  (define cache-watchlist (list home-module)))
