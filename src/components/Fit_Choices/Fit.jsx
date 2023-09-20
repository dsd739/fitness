import React from "react";
import "./fit.css";
export default function Fit() {
  return (
    <>
      <section id="pricing">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="plan">
                <div class="plan-cover">
                  <div class="plan-name">ThunderFit</div>
                  <div class="plan-summary">For up to five team members</div>
                  <div class="plan-price">
                    <h1>
                      <small>FIT</small> 1
                    </h1>
                  </div>
                </div>

                <div class="plan-action">
                  <a href="#">
                    $5 <small>/MO</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
