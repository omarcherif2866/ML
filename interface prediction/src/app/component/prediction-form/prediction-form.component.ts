import { Component } from '@angular/core';
import { PredictionService } from '../../service/prediction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios'; // Installez Axios avec `npm install axios`

@Component({
  selector: 'app-prediction-form',
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.css'] // Notez le "styleUrls" avec un "s" à la fin
})
export class PredictionFormComponent {
  predictionForm: FormGroup;
  predictionResult: number | null = null;

  constructor(private fb: FormBuilder, private predictionService: PredictionService) {
    this.predictionForm = this.fb.group({
      q1Balance: ['', Validators.required],
      q2Balance: ['', Validators.required],
      q3Balance: ['', Validators.required],
      q4Balance: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.predictionForm.valid) {
      const inputData = this.predictionForm.value;
      this.predictionService.predict(inputData).subscribe(
        response => {
          this.predictionResult = response.predictedAverageBalance;
        },
        error => {
          console.error("Erreur lors de la prédiction :", error);
        }
      );
    }
  }
}
