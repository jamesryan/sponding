import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe } from '@angular/common';

@Injectable()
export class CalculationsService {
    private calculatorForm = new BehaviorSubject<any>([]);
    private healthScoreForm = new BehaviorSubject<any>([]);
    private days = new BehaviorSubject<number>(0);
    private metricSystem = new BehaviorSubject<boolean>(this.metric);
    public metric: boolean = false;

    calculatorFormAnnounced$ = this.calculatorForm.asObservable();
    healthScoreFormAnnounced$ = this.healthScoreForm.asObservable();
    daysAnnounced$ = this.days.asObservable();
    metricSystemAnnounced$ = this.metricSystem.asObservable();

    public numberPattern = '^[0-9.]+$';
    public percentagePattern = '^[0-9.%]+$';
    dateFormat: string = 'MM/dd/yy';

    public calculationsModel = {
        'gender'        : 'f',
        'weightLoss'    : null,
        'age'           : null,
        'height'        : null,
        'weight'        : null,
        'calIn'         : null,
        'calOut'        : null
    };
    public healthScoreModel = {
        'bmi'         : null,
        'waistM'      : null,
        'internalBF'  : null,
        'muscleRatio' : null,
        'bodyFat'     : null,
        'restingMR'   : null,
        'bodyAge'     : null
    };

    constructor(private datePipe: DatePipe) { }

    // CALCULATED VALUES
    updateCalculatorForm(value) {
        this.calculatorForm.next(value);
    }

    updateHealthScore(value) {
        this.healthScoreForm.next(value);
    }

    updateDays(value) {
        this.days.next(value);
    }

    updateMetricSystem(value) {
        this.metric = value;
        this.metricSystem.next(value);
    }

    updateToForeign(value) {
        this.updateMetricSystem(value);
        this.setDateFormat(value);
    }

    genderScale(gender) {
        return gender === 'f' ? -161 : 5;
    }

    getDays(packageType, model) {
        let days = this.daysToReachGoal(packageType, model);
        this.updateDays(days);
    }

    getWeight(weight) {
        if (this.metric) {
            return weight;
        }
        return weight / 2.20462;
    }

    getWeightKgToPounds(weight) {
        if (this.metric) {
            return weight * 2.20462;
        }
        return weight;
    }

    getHeight(height) {
        if (this.metric) {
            return height;
        }
        return height * 2.54;
    }

     getMetricMeasurement(metric) {
        if (this.metric) {
            return Math.round(metric * 2.54);
        }
        return metric;
    }

    getMetricLength() {
        if (this.metric) {
            return 'cm';
        }
        return 'inches';
    }

    getMetricWeight() {
        if (this.metric) {
            return 'kg';
        }
        return 'pounds';
    }

    setDateFormat(value) {
        if (value) {
            this.dateFormat = 'dd/MM/yy';
        } else {
            this.dateFormat = 'MM/dd/yy';
        }
    }

    standardRMR(age, height, weight, gender) {
        let standard = (age + 5) + this.genderScale(gender) + (this.getHeight(height) * 6.5) + (this.getWeight(weight) * 10);
        if (!standard || standard === NaN || standard < 0) {
            return 0;
        }
        return parseFloat(standard);
    }

    genderXFactor(packType, model): number {
        if (packType === 0) {
            return model.gender === 'f' ? 2 : 1.75;
        } else {
            return model.gender === 'f' ? 3.5 : 2.75;
        }
    }

    daysToReachGoal(packType, model): number {
        let days = this.getWeightKgToPounds(model.weightLoss) * 3500 /
        (
            (
                ( (model.age * -5 ) + this.genderScale(model.gender) +
                    (this.getHeight(model.height) * 6.5) + (
                        this.getWeight(model.weight) * 10
                    )  - model.calIn
                ) + model.calOut
            ) * this.genderXFactor(packType, model)
        );
        let roundedDays = Math.round(days);

        return roundedDays < 0 ? 0 : roundedDays;
    }

    dateToReachGoal(packType, model): string {
        let today = new Date();
        let future = new Date();
        future.setDate(future.getDate() + this.daysToReachGoal(packType, model));

        return future < today ? 'invalid date' : this.datePipe.transform(future, this.dateFormat);
    }

}
