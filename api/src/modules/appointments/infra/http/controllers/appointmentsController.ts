import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import { CreateAppointmentService } from '@modules/appointments/service/createAppointmentService';
class AppointmentsController {
    public async createAppointment(request: Request, response: Response): Promise<Response> {
        const { provider_id, date } = request.body;
        
        const parsedDate = parseISO(date);

        const createAppointmentService = container.resolve(CreateAppointmentService)

        const appointment = await createAppointmentService.execute({ provider_id, date: parsedDate });

        return response.json(appointment);
    }
};

export { AppointmentsController };